# Git Commit Instructions

Use commit messages that match this repository's release tooling and recent history.

## Format

- Use one line only (this repo validates commit titles).
- Prefer Conventional Commits: `type(scope): subject`.
- Keep `type` and `scope` lowercase.
- Write `subject` in imperative mood (e.g., "add", "fix", "update").
- Do not end the subject with a period.

## Allowed types

Use the types configured in `.github/semantic.yml`:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `build`
- `ci`
- `chore`
- `revert`
- `chore(deps)`
- `chore(deps-dev)`

## Scope guidance

Use a scope when it improves clarity. Prefer package/component scopes seen in repo history, such as:

- `progress-tracker`, `file-input`, `breadcrumb`
- `core`, `angular`, `react`, `docs`, `website`, `test-app`
- `workflows`, `deps`, `deps-dev`

## Style notes from this repo's history

- Keep messages concise and descriptive.
- Avoid merge-style subjects like `Merge branch ...`.
- Avoid release-bot subjects like `Bump version to ...` or `Update CHANGELOG.md` unless running the release flow.

## Good examples

- `feat(progress-tracker): add validation for forward navigation`
- `fix(file-input): guard against null DataTransfer`
- `docs(website): clarify dark mode toggle guidance`
- `ci(workflows): update website deploy permissions`
- `chore(deps): update nx to latest minor`

