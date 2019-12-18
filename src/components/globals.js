import Vue from "vue";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponents = require.context(
    '@components/base',
    true,
    /[\w-]+\.vue$/
);

requireComponents.keys().forEach(fileName => {

        const componentConfig = requireComponents(fileName);

        const componentName = upperFirst(
            camelCase(
                fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
            )
        );

        Vue.component(
            componentName,
            componentConfig.default || componentConfig
        );
    }
);
