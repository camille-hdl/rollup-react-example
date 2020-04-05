module.exports = function(api) {
    api.cache.invalidate(() => [process.env.NODE_ENV, process.env.ROLLUP_BUILD_TYPE].join("-"));
    const environment = api.env();
    const modern = process.env.ROLLUP_BUILD_TYPE === "modern";
    /**
     * Will be used for the legacy build
     */
    const presetEnv = [
        "@babel/preset-env",
        {
            modules: false,
            targets: {
                browsers: [">0.25%", "not op_mini all"],
            },
        },
    ];
    /**
     * Will be used for the modern build
     */
    const presetModule = [
        "@babel/preset-modules",
        {
            loose: true,
        },
    ];
    const alwaysUsedPresets = ["@babel/preset-react", "@babel/preset-flow"];

    const alwaysUsedPlugins = [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
    ];
    /**
     * Plugins chargés uniquement pour le build legacy
     */
    const legacyPlugins = ["@babel/plugin-proposal-object-rest-spread"];

    const productionConfig =
        modern === "modern"
            ? {
                  /**
                   * Modern build
                   */
                  presets: [presetModule, ...alwaysUsedPresets],
                  plugins: [...alwaysUsedPlugins],
              }
            : {
                  /**
                   * Legacy build
                   */
                  presets: [presetEnv, ...alwaysUsedPresets],
                  plugins: [...alwaysUsedPlugins, ...legacyPlugins],
              };

    const developmentConfig =
        modern === "modern"
            ? {
                  /**
                   * Modern build
                   */
                  presets: [presetModule, ...alwaysUsedPresets],
                  plugins: [...alwaysUsedPlugins],
              }
            : {
                  /**
                   * Legacy build
                   */
                  presets: [presetEnv, ...alwaysUsedPresets],
                  plugins: [...alwaysUsedPlugins, ...legacyPlugins],
              };
    return {
        env: {
            production: productionConfig,
            development: developmentConfig,
            test: {
                presets: ["@babel/preset-env", ...alwaysUsedPresets],
                plugins: [...alwaysUsedPlugins, ...legacyPlugins],
            },
        },
    };
};
