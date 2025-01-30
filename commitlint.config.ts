import { UserConfig } from "@commitlint/types"

const Configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    formatter: "@commitlint/format",
    rules: {
        "footer-max-line-length": [1, "always", 100],
        "body-leading-blank": [1, "always"],
    },
}

export default Configuration
