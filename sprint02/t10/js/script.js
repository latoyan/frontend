function person_hero() {
    let name, gender, age, person;

    name = name_hero(name)
    if (name == false) return alert("Syntax error");

    gender = gender_hero(gender)
    if (gender === false) return alert("Syntax error");

    age = age_hero(age)
    if (age == false) return alert("Syntax error");

    if ((age > 0 && age < 18) && gender == "male") person = "boy";
    if (age > 18 && gender == "male") person = "man";
    if ((age > 0 && age < 18) && gender == "female") person = "girl";
    if (age > 18 && gender == "female") person = "woman";
    if ((age > 0 && age < 18) && gender == "") person = "kid";
    if (age > 18 && gender == "") person = "hero";

    alert(`The superhero name is: ${name}-${person}!`);
}

function name_hero(name) {
    name = prompt("What animal is the superhero most similar to?");

    if (!/^[a-z]{1,20}$/i.test(name)) return false;
    return name;
}

function gender_hero(gender) {
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

    if (!/^male$/i.test(gender) && !/^female$/i.test(gender) && !/^$/.test(gender)) return false;
    return gender;
}

function age_hero(age) {
    age = prompt("How old is the superhero?");

    if (!/^[1-9][0-9]{0,4}$/.test(age)) return false;
    return age;
}

person_hero();