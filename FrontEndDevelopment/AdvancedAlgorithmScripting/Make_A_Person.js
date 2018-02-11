var Person = function (firstAndLast) {
    var fullname = firstAndLast.split(' ');
    var firstname = fullname[0];
    var lastname = fullname[1];
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstname + ' ' + lastname;
    };

    this.getFirstName = function () {
        return firstname;
    };

    this.getLastName = function () {
        return lastname;
    };

    this.setFirstName = function (fname) {
        firstname = fname;
    };

    this.setLastName = function (lname) {
        lastname = lname;
    };

    this.setFullName = function (firstAndLast) {
        fullname = firstAndLast.split(' ');
        firstname = fullname[0];
        lastname = fullname[1];
    };


    return firstAndLast;
};
var bob = new Person('Bob Ross');
bob.getFullName();
