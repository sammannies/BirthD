var BirthDContract = function() {
  // Data stored by the smart contract
  LocalContractStorage.defineMapProperty(this, "hash_to_b") // Max, Number, Data, Date
}

BirthDContract.prototype = {
  // init is called once, when the contract is deployed.
  init: function() { },

  requestBirthD: function (age) {
    if(Blockchain.transaction.value != 0) { // Users only pay the gas fee.
        throw new Error("I don't want your money.");
    }
    if(isNaN(age) || age < 1) {
      throw new Error("age is not a number.");
    }

    var birth = (new Date()).getFullYear() - age;
    this.hash_to_b.put(Blockchain.transaction.hash, {birth, age, date: Date.now()});
  },

  getBirthD: function (hash) {
    return this.hash_to_b.get(hash);
  },
}

module.exports = BirthDContract
