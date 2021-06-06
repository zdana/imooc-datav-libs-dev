(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.imoocDatav = factory(global.vue));
}(this, (function (vue) { 'use strict';

  var script = {
    name: 'TestComponent',
    setup: function setup() {
      var message = 'hello world!';
      var count = vue.ref(1);
      var doubleCount = vue.computed(function () {
        return count.value * 2;
      });

      var add = function add() {
        count.value++;
      };

      return {
        message: message,
        doubleCount: doubleCount,
        add: add
      };
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-07bdddea");

  vue.pushScopeId("data-v-07bdddea");

  var _hoisted_1 = {
    "class": "test"
  };

  vue.popScopeId();

  var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", null, "message:" + vue.toDisplayString($setup.message), 1
    /* TEXT */
    ), vue.createVNode("div", null, "doubleCount:" + vue.toDisplayString($setup.doubleCount), 1
    /* TEXT */
    ), vue.createVNode("button", {
      onClick: _cache[1] || (_cache[1] = function () {
        return $setup.add && $setup.add.apply($setup, arguments);
      })
    }, "add count")]);
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-07bdddea";
  script.__file = "src/Test.vue";

  /* ----------------------------------------------------------------------*/
  function index (Vue) {
    Vue.component(script.name, script);
  }
  /*------------------------------------------*/
  //commonjs文件

  /*该方法不论有没有用到全部，bulid时均会被打包*/
  // const a = 1
  // const b = 2
  // module.exports = { a, b }
  // 局部打包的方法
  // exports.a=1;
  // exports.b=2;

  /*------------------------------------------*/

  return index;

})));
