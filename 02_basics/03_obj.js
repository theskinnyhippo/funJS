const course = {
    coursename : "magic",
    price : 99,
    language : "hindi"
}

//descructure of an object

const {language} = course
console.log(language)

const {language : lang} = course
console.log(lang)

// const navbar = ({company}) => {
//                                                 destructure in react thing
// }
// navbar(company = "mandir")
