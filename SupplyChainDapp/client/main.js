import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

contractAddress = "0x5e432704ea351a45cdf922efa629e18eb929dcc4"
ABIArray = [{"constant":true,"inputs":[],"name":"car","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newCar","type":"string"}],"name":"setCar","outputs":[],"payable":false,"type":"function"}]
data = "60606040526040805190810160405280600381526020017f424d5700000000000000000000000000000000000000000000000000000000008152506000908051906020019061004f929190610060565b50341561005b57600080fd5b610105565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a157805160ff19168380011785556100cf565b828001600101855582156100cf579182015b828111156100ce5782518255916020019190600101906100b3565b5b5090506100dc91906100e0565b5090565b61010291905b808211156100fe5760008160009055506001016100e6565b5090565b90565b6102bf806101146000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063ee26fac314610049578063f17a11ed146100d8575b600080fd5b341561005457600080fd5b61005c610135565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009d5780820151818401525b602081019050610081565b50505050905090810190601f1680156100ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100e357600080fd5b610133600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101d3565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cb5780601f106101a0576101008083540402835291602001916101cb565b820191906000526020600020905b8154815290600101906020018083116101ae57829003601f168201915b505050505081565b80600090805190602001906101e99291906101ee565b505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061022f57805160ff191683800117855561025d565b8280016001018555821561025d579182015b8281111561025c578251825591602001919060010190610241565b5b50905061026a919061026e565b5090565b61029091905b8082111561028c576000816000905550600101610274565b5090565b905600a165627a7a72305820e904a880687d9fe321d616c5562b8d57a2980b6507064deea8856925f2921ec30029"

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    web3.eth.getBalance("0x1D11CbABDf4BccFee67D606c6c9C6C75E037AaD0",function(err, res){
        alert(res);
    })
   myContract = web3.eth.contract(ABIArray).at(contractAddress);
   myContract.car(function(err, res){
        alert(res);
   })
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
