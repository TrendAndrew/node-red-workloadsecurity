module.exports = function(RED) {

    function ListAdministrators(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node._cloudone = RED.nodes.getNode(config.cloudone);
        const streaming = false;    // todo: future streaming option
 
        node.on('input', function(msg) {
            node._cloudone.call(node, {
                method: "GET",
                uri: {
                    service: 'workload',
                    region: (msg && msg.payload && msg.payload.region) || undefined,
                    path: 'administrators'
                },
                headers: {
                    'Api-Version': 'v1',
                    //'Content-Type': 'application/vnd.api+json'
                }
            }, null, function(body) {
                console.log(body);
                if (!body || !body.administrators) {
                    node.status({ fill:"red", shape:"ring", text:"Response Error, Missing 'administrators'." });
                    return;
                }
                const count = body.administrators.length;
                node.status({ fill:"green", shape:"dot", text:"Listed " + count + ' administrator' + (count === 1 ? '' : 's')});
                if (streaming) {
                    // foreach (computers) {
                    //     node.send([computer]);
                    // }
                } else {
                    node.send({
                        payload: body.administrators
                    });
                }
            });
        });
    }
    RED.nodes.registerType("list administrators", ListAdministrators);
};
