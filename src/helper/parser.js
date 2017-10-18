

export default (path, html) => {
    var baseurl = `${location.protocol}//${location.host}/vulhub/${path}`
    const buildNodes = node => {
        var i, newNode, attributes, child;
    
        switch( node.nodeType ){
            case 1: // ELEMENT_NODE
                newNode = document.createElement( node.tagName );
                for( i = 0; i < node.attributes.length; i++ ){
                    if(node.tagName.toLowerCase() == "img" && node.attributes[ i ].name == "src") {
                        newNode.setAttribute( node.attributes[ i ].name, `${baseurl}/${node.attributes[i].value}`);
                    } else {
                        newNode.setAttribute( node.attributes[ i ].name, node.attributes[ i ].value );
                    }
                }
                for( i = 0; i < node.childNodes.length; i++ ){
                    child = buildNodes( node.childNodes[ i ] );
                    if( child !== undefined ){
                        newNode.appendChild( child );
                    }
                }
                return newNode;
            case 3: // TEXT_NODE
                return document.createTextNode( node.textContent );
            default:
                return undefined;
        }
    }

    var parser = new DOMParser()
    var dom = parser.parseFromString(`<head></head><body><article id="main">${html}</article></body>`, "text/html")

    var main = dom.getElementById("main")
    main = buildNodes(main)
    return main.innerHTML
}
