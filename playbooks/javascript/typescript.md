---
title: TypeScript
description: Best practices, rules, guides, and everything in between
---

Notice ⚔️: These are not "set in stone" rules, but should be followed as much as possible. We use
[tslint/eslint linters](https://github.com/bornfight/js-coding-standards#readme) for stuff that we can check with
static analysis, but in this document are written architectural principles that can not be "easily" checked with
current tools.

# Collocation

- place enums and interfaces in directories adjacent to their contextual definition
- rule of thumb:
  - enums go to {context}/enums/
  - interfaces go to {context}/interfaces/

Example:

GOOD ✅

```typescript
// model/Foo.ts
import { Bar } from "model/enums/Bar"

class Foo {
  public bar: Bar
}
```

BAD 🛑

```typescript
// model/Foo.ts
import { Bar } from "features/login/components/interfaces/Bar"

class Foo {
  public bar: Bar
}
```
