import React from "react";

const committeeMembers = [
  { name: "Sophie van den Berg", image: "/images/committee/sophie.jpeg", top: "0%", left: "0%", linkedin: "https://www.linkedin.com/in/sophievandenberg/" },
  { name: "Kally Chung", image: "/images/committee/kally.jpeg", top: "5%", left: "18%", linkedin: "https://www.linkedin.com/in/kally-chung/" },
  { name: "Alexander Oude Elferink", image: "/images/committee/alexander.jpeg", top: "0%", left: "32%", linkedin: "https://www.linkedin.com/in/alexanderoudeelferink/" },
  { name: "Louis de Bruijn", image: "/images/committee/louis.jpeg", top: "5%", left: "52%", linkedin: "https://www.linkedin.com/in/louis-de-bruijn-23a7a9184/" },
  { name: "Akhila Vangara", image: "/images/committee/akhila.jpeg", top: "0%", left: "67%", linkedin: "https://www.linkedin.com/in/akhila-vangara-3641a4aa/"},
  { name: "Shunyao Yu", image: "/images/committee/shunyao.jpeg", top: "5%", left: "82%", linkedin: "https://www.linkedin.com/in/shunyao-yu/" },
  { name: "Nikki van Ommeren", image: "/images/committee/nikki.jpeg", top: "41%", left: "4%", linkedin: "https://www.linkedin.com/in/nikki-van-ommeren-43a806a2/"},
  { name: "Floor Harmsen", image: "/images/committee/floor.png", top: "36%", left: "22%", linkedin: "https://www.linkedin.com/in/fharmsen/" },
  { name: "Mark Berger", image: "/images/committee/mark.jpeg", top: "41%", left: "38%", linkedin: "https://www.linkedin.com/in/markberger-1/" },
  { name: "Anton Sugonyako", image: "/images/committee/anton.jpeg", top: "36%", left: "53%", linkedin: "https://www.linkedin.com/in/antonsugonyako/" },
  { name: "Atul Chhotray", image: "/images/committee/atul.jpeg", top: "41%", left: "70%", linkedin: "https://www.linkedin.com/in/atul-chhotray-a3b121223/" },
  { name: "Rick Vergunst", image: "/images/committee/rick.jpeg", top: "36%", left: "85%", linkedin: "https://www.linkedin.com/in/rick-vergunst/" },
  { name: "Matthijs Brouns", image: "/images/committee/matthijs.jpeg", top: "80%", left: "5%", linkedin: "https://www.linkedin.com/in/mbrouns/" },
  { name: "Dillon Gardner", image: "/images/committee/dillon.jpeg", top: "74%", left: "23%", linkedin: "https://www.linkedin.com/in/dillon-r-gardner/" },
  { name: "Bouke Postma", image: "/images/committee/bouke.jpeg", top: "80%", left: "40%", linkedin: "https://www.linkedin.com/in/bouke-postma/" },
  { name: "Bas Vlaming", image: "/images/committee/bas.jpeg", top: "74%", left: "55%", linkedin: "https://www.linkedin.com/in/basvlaming/" },
  { name: "Marysia Winkels", image: "/images/committee/marysia.jpeg", top: "80%", left: "70%", linkedin: "https://www.linkedin.com/in/marysia-winkels/" },
  { name: "Miha Gazvoda", image: "/images/committee/miha.jpg", top: "74%", left: "85%", linkedin: "https://www.linkedin.com/in/mihagazvoda/"}
];

const CommitteeMembers = () => {
  return (
    <div className="py-16 relative overflow-hidden buttons-breakpoint:p-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-center text-4xl text-black mb-12">
          Our committee members
        </h2>
        <div className="relative h-[600px] w-full hidden lg:block">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="absolute text-center committee-member"
              style={{ top: member.top, left: member.left }}
            >
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-2"
                />
                <div className="text-xl text-black">{member.name}</div>
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:hidden">
          {committeeMembers.map((member, index) => (
            <a key={index} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />
              <div className="text-xl text-black">{member.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
  

export default CommitteeMembers;