const person = {
    name: 'Abhyusth',
    age: 28,
    address: {
        line1: '362',
        line2: 'Tallaiya Maholla',
        line3: 'Jhansi (U.P.)'
    },
    profiles: ['twitter', 'linkedIn', 'github'],
    printProfiles: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return(     
        <>
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <div>Address: {person.address.line1}, {person.address.line2}, {person.address.line3}</div>
        <div>Profiles: {person.printProfiles()}</div>
        </>
    )
}