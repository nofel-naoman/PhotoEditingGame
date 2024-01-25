/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/insert-css";
exports.ids = ["vendor-chunks/insert-css"];
exports.modules = {

/***/ "(ssr)/./node_modules/insert-css/index.js":
/*!******************************************!*\
  !*** ./node_modules/insert-css/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("var containers = []; // will store container HTMLElement references\nvar styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}\nvar usage = \"insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).\";\nfunction insertCss(css, options) {\n    options = options || {};\n    if (css === undefined) {\n        throw new Error(usage);\n    }\n    var position = options.prepend === true ? \"prepend\" : \"append\";\n    var container = options.container !== undefined ? options.container : document.querySelector(\"head\");\n    var containerId = containers.indexOf(container);\n    // first time we see this container, create the necessary entries\n    if (containerId === -1) {\n        containerId = containers.push(container) - 1;\n        styleElements[containerId] = {};\n    }\n    // try to get the correponding container + position styleElement, create it otherwise\n    var styleElement;\n    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {\n        styleElement = styleElements[containerId][position];\n    } else {\n        styleElement = styleElements[containerId][position] = createStyleElement();\n        if (position === \"prepend\") {\n            container.insertBefore(styleElement, container.childNodes[0]);\n        } else {\n            container.appendChild(styleElement);\n        }\n    }\n    // strip potential UTF-8 BOM if css was read from a file\n    if (css.charCodeAt(0) === 0xFEFF) {\n        css = css.substr(1, css.length);\n    }\n    // actually add the stylesheet\n    if (styleElement.styleSheet) {\n        styleElement.styleSheet.cssText += css;\n    } else {\n        styleElement.textContent += css;\n    }\n    return styleElement;\n}\n;\nfunction createStyleElement() {\n    var styleElement = document.createElement(\"style\");\n    styleElement.setAttribute(\"type\", \"text/css\");\n    return styleElement;\n}\nmodule.exports = insertCss;\nmodule.exports.insertCss = insertCss;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxhQUFhLEVBQUUsRUFBRSw4Q0FBOEM7QUFDbkUsSUFBSUMsZ0JBQWdCLEVBQUUsRUFBRSx5REFBeUQ7QUFFakYsSUFBSUMsUUFBUTtBQUVaLFNBQVNDLFVBQVVDLEdBQUcsRUFBRUMsT0FBTztJQUMzQkEsVUFBVUEsV0FBVyxDQUFDO0lBRXRCLElBQUlELFFBQVFFLFdBQVc7UUFDbkIsTUFBTSxJQUFJQyxNQUFNTDtJQUNwQjtJQUVBLElBQUlNLFdBQVdILFFBQVFJLE9BQU8sS0FBSyxPQUFPLFlBQVk7SUFDdEQsSUFBSUMsWUFBWUwsUUFBUUssU0FBUyxLQUFLSixZQUFZRCxRQUFRSyxTQUFTLEdBQUdDLFNBQVNDLGFBQWEsQ0FBQztJQUM3RixJQUFJQyxjQUFjYixXQUFXYyxPQUFPLENBQUNKO0lBRXJDLGlFQUFpRTtJQUNqRSxJQUFJRyxnQkFBZ0IsQ0FBQyxHQUFHO1FBQ3BCQSxjQUFjYixXQUFXZSxJQUFJLENBQUNMLGFBQWE7UUFDM0NULGFBQWEsQ0FBQ1ksWUFBWSxHQUFHLENBQUM7SUFDbEM7SUFFQSxxRkFBcUY7SUFDckYsSUFBSUc7SUFFSixJQUFJZixhQUFhLENBQUNZLFlBQVksS0FBS1AsYUFBYUwsYUFBYSxDQUFDWSxZQUFZLENBQUNMLFNBQVMsS0FBS0YsV0FBVztRQUNoR1UsZUFBZWYsYUFBYSxDQUFDWSxZQUFZLENBQUNMLFNBQVM7SUFDdkQsT0FBTztRQUNIUSxlQUFlZixhQUFhLENBQUNZLFlBQVksQ0FBQ0wsU0FBUyxHQUFHUztRQUV0RCxJQUFJVCxhQUFhLFdBQVc7WUFDeEJFLFVBQVVRLFlBQVksQ0FBQ0YsY0FBY04sVUFBVVMsVUFBVSxDQUFDLEVBQUU7UUFDaEUsT0FBTztZQUNIVCxVQUFVVSxXQUFXLENBQUNKO1FBQzFCO0lBQ0o7SUFFQSx3REFBd0Q7SUFDeEQsSUFBSVosSUFBSWlCLFVBQVUsQ0FBQyxPQUFPLFFBQVE7UUFBRWpCLE1BQU1BLElBQUlrQixNQUFNLENBQUMsR0FBR2xCLElBQUltQixNQUFNO0lBQUc7SUFFckUsOEJBQThCO0lBQzlCLElBQUlQLGFBQWFRLFVBQVUsRUFBRTtRQUN6QlIsYUFBYVEsVUFBVSxDQUFDQyxPQUFPLElBQUlyQjtJQUN2QyxPQUFPO1FBQ0hZLGFBQWFVLFdBQVcsSUFBSXRCO0lBQ2hDO0lBRUEsT0FBT1k7QUFDWDs7QUFFQSxTQUFTQztJQUNMLElBQUlELGVBQWVMLFNBQVNnQixhQUFhLENBQUM7SUFDMUNYLGFBQWFZLFlBQVksQ0FBQyxRQUFRO0lBQ2xDLE9BQU9aO0FBQ1g7QUFFQWEsT0FBT0MsT0FBTyxHQUFHM0I7QUFDakIwQix3QkFBd0IsR0FBRzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9lZGl0aW5nZ2FtZS8uL25vZGVfbW9kdWxlcy9pbnNlcnQtY3NzL2luZGV4LmpzPzcyMzgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbnRhaW5lcnMgPSBbXTsgLy8gd2lsbCBzdG9yZSBjb250YWluZXIgSFRNTEVsZW1lbnQgcmVmZXJlbmNlc1xudmFyIHN0eWxlRWxlbWVudHMgPSBbXTsgLy8gd2lsbCBzdG9yZSB7cHJlcGVuZDogSFRNTEVsZW1lbnQsIGFwcGVuZDogSFRNTEVsZW1lbnR9XG5cbnZhciB1c2FnZSA9ICdpbnNlcnQtY3NzOiBZb3UgbmVlZCB0byBwcm92aWRlIGEgQ1NTIHN0cmluZy4gVXNhZ2U6IGluc2VydENzcyhjc3NTdHJpbmdbLCBvcHRpb25zXSkuJztcblxuZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih1c2FnZSk7XG4gICAgfVxuXG4gICAgdmFyIHBvc2l0aW9uID0gb3B0aW9ucy5wcmVwZW5kID09PSB0cnVlID8gJ3ByZXBlbmQnIDogJ2FwcGVuZCc7XG4gICAgdmFyIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICB2YXIgY29udGFpbmVySWQgPSBjb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKTtcblxuICAgIC8vIGZpcnN0IHRpbWUgd2Ugc2VlIHRoaXMgY29udGFpbmVyLCBjcmVhdGUgdGhlIG5lY2Vzc2FyeSBlbnRyaWVzXG4gICAgaWYgKGNvbnRhaW5lcklkID09PSAtMSkge1xuICAgICAgICBjb250YWluZXJJZCA9IGNvbnRhaW5lcnMucHVzaChjb250YWluZXIpIC0gMTtcbiAgICAgICAgc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF0gPSB7fTtcbiAgICB9XG5cbiAgICAvLyB0cnkgdG8gZ2V0IHRoZSBjb3JyZXBvbmRpbmcgY29udGFpbmVyICsgcG9zaXRpb24gc3R5bGVFbGVtZW50LCBjcmVhdGUgaXQgb3RoZXJ3aXNlXG4gICAgdmFyIHN0eWxlRWxlbWVudDtcblxuICAgIGlmIChzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdW3Bvc2l0aW9uXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdW3Bvc2l0aW9uXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZUVsZW1lbnQgPSBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXVtwb3NpdGlvbl0gPSBjcmVhdGVTdHlsZUVsZW1lbnQoKTtcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICdwcmVwZW5kJykge1xuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RyaXAgcG90ZW50aWFsIFVURi04IEJPTSBpZiBjc3Mgd2FzIHJlYWQgZnJvbSBhIGZpbGVcbiAgICBpZiAoY3NzLmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikgeyBjc3MgPSBjc3Muc3Vic3RyKDEsIGNzcy5sZW5ndGgpOyB9XG5cbiAgICAvLyBhY3R1YWxseSBhZGQgdGhlIHN0eWxlc2hlZXRcbiAgICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCArPSBjc3NcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgKz0gY3NzO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XG4gICAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xubW9kdWxlLmV4cG9ydHMuaW5zZXJ0Q3NzID0gaW5zZXJ0Q3NzO1xuIl0sIm5hbWVzIjpbImNvbnRhaW5lcnMiLCJzdHlsZUVsZW1lbnRzIiwidXNhZ2UiLCJpbnNlcnRDc3MiLCJjc3MiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJwb3NpdGlvbiIsInByZXBlbmQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXJJZCIsImluZGV4T2YiLCJwdXNoIiwic3R5bGVFbGVtZW50IiwiY3JlYXRlU3R5bGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGROb2RlcyIsImFwcGVuZENoaWxkIiwiY2hhckNvZGVBdCIsInN1YnN0ciIsImxlbmd0aCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwidGV4dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/insert-css/index.js\n");

/***/ })

};
;