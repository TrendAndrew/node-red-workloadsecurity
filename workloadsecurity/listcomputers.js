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
            }, null, function(body) {
                console.log(body);
                if (!body || !body.computers) {
                    node.status({ fill:"red", shape:"ring", text:"Response Error, Missing 'computers'." });
                    return;
                }
                const count = body.computers.length;
                node.status({ fill:"green", shape:"dot", text:"Listed " + count + ' computer' + (count === 1 ? '' : 's')});
                if (streaming) {
                    // foreach (computers) {
                    //     node.send([computer]);
                    // }
                } else {
                    node.send({
                        payload: body.computers
                    });
                }
            });
        });
    }
    RED.nodes.registerType("list computers", ListComputers);
};
