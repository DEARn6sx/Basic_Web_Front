let profile = {
    fname :'DEAR',
    lname :'Za',
    age : 20,
    //method
    Fullname:function(){
        return this.fname + this.lname
    }

}

console.log(typeof(profile))
console.log(profile)
console.log(profile.Fullname())