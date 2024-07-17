const userInformation = {
  name: "Max",
  age: 30,
  city: "Chicago",
  work: "Web Designer",
  showUserInfo: function () {
    console.log(
      `My name is ${this.name}, i am ${this.age}. I live in ${this.city}, my profession is ${this.work}`
    );
  },
};
userInformation.showUserInfo();
