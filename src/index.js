module.exports.handler = async function (event, context) {
    console.log('test')

    return {
        statusCode: 200,
        body: 'Success',
    };
};
