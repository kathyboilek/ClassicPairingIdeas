var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'PairingIdeasWebPartStrings';
import PairingIdeas from './components/PairingIdeas';
var PairingIdeasWebPart = /** @class */ (function (_super) {
    __extends(PairingIdeasWebPart, _super);
    function PairingIdeasWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PairingIdeasWebPart.prototype.render = function () {
        var element = React.createElement(PairingIdeas, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    PairingIdeasWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(PairingIdeasWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    PairingIdeasWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return PairingIdeasWebPart;
}(BaseClientSideWebPart));
export default PairingIdeasWebPart;
//# sourceMappingURL=PairingIdeasWebPart.js.map