module.exports = function(RED) {

    function ListComputers(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node._cloudone = RED.nodes.getNode(config.cloudone);
        const streaming = false;    // todo: future streaming option
 
        node.on('input', function(msg) {
            const expand = ['applicationControl','none'];
            const expands = 'expand=' + expand.join('&expand=');
            const overrides = '&overrides=false';
            console.log('https://workload.{{region}}.cloudone.trendmicro.com/api/computers?' + expands + overrides);
            node._cloudone.call(node, {
                method: "GET",
                uri: {
                    service: 'workload',
                    region: (msg && msg.payload && msg.payload.region) || undefined,
                    path: 'computers?' + expands + overrides
                },
                headers: {
                    'Api-Version': 'v1',
                    //'Content-Type': 'application/vnd.api+json'
                }
            });
        }, null, function(body) {
            node.status({});
            console.log(body);
            if (streaming) {
                // foreach (computers) {
                //     node.send([computer]);
                // }
            } else {
                node.send(body);
            }
        });

    }
    RED.nodes.registerType("list computers", ListComputers);
};
