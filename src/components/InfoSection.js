const InfoSection = ({ user, activeLink }) => {

    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `My email address is  ${user.email}`,
      `I was born on ${user.dob.date.slice(0, 10)} `,
      `My country is  ${user.location.country}`,
      `My phone number is ${user.phone}`,
      `My password is ${user.login.password} `,
    ]

    return (
    <h1 style={{marginBottom:"24px"}}>{phrases[activeLink]}</h1>
    )
  }

  export default InfoSection