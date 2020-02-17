import * as fs from "fs";
import * as includes from "lodash.includes";
import * as getYAMLHeadline from "markdown-yaml-metadata-parser";
import { execSync } from "child_process";
import * as glob from "glob";
import { join } from "path";
import * as path from "path";

function findReadmeFolders(dir, excludedFolders: string[] = []): string[] {
    let result = [];
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (
            //Exclude folders from excludedFolders param, folders that start with "." and nonDirs
            includes(excludedFolders, dirPath) ||
            f.indexOf(".") === 0 ||
            !fs.statSync(dirPath).isDirectory()
        )
            return;

        result.push(dirPath);
        let innerFolders = findReadmeFolders(dirPath);
        if (innerFolders) {
            for (let i in innerFolders) result.push(innerFolders[i]);
        }
    });
    return result;
}

const skipFolders = ["node_modules", ".git", "scripts", "static"];
const UFGFile = "topics-up-for-grabs.md";
const aboveTOC = "<!-- prettier-ignore-start -->\n<!-- start_toc -->";
const belowTOC = "<!-- end_toc -->\n<!-- prettier-ignore-end -->";

let readmeFolders: string[] = findReadmeFolders(".", skipFolders);

const UFGText =
    "# These are all the files that have .md files but no content.\n\n" +
    "Consider them topics, that are still to be filled out, so feel free to type up a bit about the subject!\n\n" +
    "> These are generated automatically out of every empty .md file.\n\n" +
    "| Title | Overview |\n|---|---|\n";
fs.writeFileSync(UFGFile, UFGText, "utf8");

// Create an overview README per folder
readmeFolders.forEach(folder => {
    const readmePath = join(folder, "README.md");

    // Make something if there is nothing there yet
    if (!fs.existsSync(readmePath)) {
        fs.writeFileSync(readmePath, `### [TODO]\n\n${aboveTOC}\n${belowTOC}\n\n[TODO]`, "utf8");
    }

    // We want to swap out the center of a toc with a new version of the README
    const content = fs.readFileSync(readmePath, "utf8");
    const before = `${content.split(aboveTOC)[0]}${aboveTOC}\n`;
    const after = `\n${belowTOC}${content.split(belowTOC)[1] || ""}`;
    // Make a TOC with all the markdown files in that folder
    const docs = fs
        .readdirSync(folder)
        .filter(f => f !== "README.md") // No READMEs
        .map(f => join(folder, f))
        .filter(f => fs.lstatSync(f).isFile()) // files only
        .filter(f => includes(f, ".md")) // only md files
        .map(subREADMEPath => {
            const subREADMEContents = fs.readFileSync(subREADMEPath, "utf8");
            const headerMetadata = getYAMLHeadline(subREADMEContents).metadata;
            const content = getYAMLHeadline(subREADMEContents).content;
            const title =
                (headerMetadata && headerMetadata.title) ||
                `[TODO] add title via yml front-matter to ${subREADMEPath}`;
            const description =
                (headerMetadata && headerMetadata.description) ||
                `[TODO] add description via yml front-matter to ${subREADMEPath}`;

            if (!content) {
                fs.appendFileSync(
                    UFGFile,
                    `| [${title}(${subREADMEPath})](${subREADMEPath}) | ${description}| \n`,
                    "utf8"
                );
            }

            return `| [${title}](/${subREADMEPath}#readme) | ${description} |`;
        });

    const inside = `| Title | Overview |\n|---|---|\n${docs.join("\n")}`;

    const newContent = `${before}${inside}${after}`;
    fs.writeFileSync(readmePath, newContent, "utf8");
});

// Edit the root README to highlight the areas of docs
const content = fs.readFileSync("README.md", "utf8");
const before = `${content.split(aboveTOC)[0]}${aboveTOC}\n`;
const after = `\n${belowTOC}${content.split(belowTOC)[1]}`;

const docs = readmeFolders
    .map(f => {
        const jsonPath = join(f, "summary.json");
        //Remove subfolder table of contents in main readme
        if (jsonPath.match(/\//g).length === 1) {
            if (!fs.existsSync(jsonPath)) {
                return `| [[TODO] Add a summary.json to ${f}](/${f}) | [TODO] |`;
            } else {
                const settings = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
                return `| [${settings.title}](/${f}#readme) | ${settings.description} |`;
            }
        }

        return false;
    })
    .filter(line => line != false);

const inside = `| Section |  |\n|---|---|\n${docs.join("\n")}`;
const newContent = `${before}${inside}${after}`;
fs.writeFileSync("README.md", newContent, "utf8");

// Update the TOC on files that have the "<!-- START doctoc -->" tag
glob("!(node_modules)/**/**/*.md", (err, matches) => {
    matches.forEach(f => {
        const content = fs.readFileSync(f, "utf8");
        if (content.indexOf("<!-- START doctoc ") !== -1) {
            execSync(`yarn doctoc ${f}`);
        }
    });
});
