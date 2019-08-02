const {app, whenCalled} = require('@wix/serverless-testkit');
const {wix} = require('@wix/serverless-platformized-apis');// all wix apis are here

describe('something', () => {

  const scope = 'template-cms-snapshooter';
  const serverlessTestkit = app(scope).beforeAndAfter(10000);

  it('should do cool things', async () => {

    await serverlessTestkit.datastore.put('key', 'value'); // put to datastore
    await serverlessTestkit.datastore.get('key'); //get from datastore

    const rpcStub = serverlessTestkit.rpc.stub(wix.api.v1.AwesomeApi);// stub rpc service

    whenCalled(rpcStub.get).withAny().thenResolveWith({}); // set expectations from rpc stub

    serverlessTestkit.petri.onConductExperiment((key, fallback) => 'true'); // petri expectations
  });
});
