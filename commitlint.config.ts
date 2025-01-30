import { UserConfig } from "@commitlint/types"

const Configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {},
    plugins: [{ rules: {} }],
    prompt: {},
}

export default Configuration

//     prompt: {
//         settings: {},
//         questions: {
//             type: {
//                 description:
//                     "Select the type of change that you're committing:",
//                 enum: {
//                     feat: {
//                         description: "A new feature",
//                         title: "Features",
//                         emoji: "✨",
//                     },
//                     fix: {
//                         description: "A bug fix",
//                         title: "Bug Fixes",
//                         emoji: "🐛",
//                     },
//                     docs: {
//                         description: "Documentation only changes",
//                         title: "Documentation",
//                         emoji: "📚",
//                     },
//                     style: {
//                         description:
//                             "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
//                         title: "Styles",
//                         emoji: "💎",
//                     },
//                     refactor: {
//                         description:
//                             "A code change that neither fixes a bug nor adds a feature",
//                         title: "Code Refactoring",
//                         emoji: "📦",
//                     },
//                     perf: {
//                         description: "A code change that improves performance",
//                         title: "Performance Improvements",
//                         emoji: "🚀",
//                     },
//                     test: {
//                         description:
//                             "Adding missing tests or correcting existing tests",
//                         title: "Tests",
//                         emoji: "🚨",
//                     },
//                     build: {
//                         description:
//                             "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
//                         title: "Builds",
//                         emoji: "🛠",
//                     },
//                     ci: {
//                         description:
//                             "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
//                         title: "Continuous Integrations",
//                         emoji: "⚙️",
//                     },
//                     chore: {
//                         description:
//                             "Other changes that don't modify src or test files",
//                         title: "Chores",
//                         emoji: "♻️",
//                     },
//                     revert: {
//                         description: "Reverts a previous commit",
//                         title: "Reverts",
//                         emoji: "🗑",
//                     },
//                 },
//             },
//             scope: {
//                 description:
//                     "What ticket is this change related to? (e.g., RM-123).",
//             },
//             subject: {
//                 description: "Write a short description of the change",
//             },
//         },
//     },
// }

// export default Configuration
