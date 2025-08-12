// TeamSection.jsx

const teamMembers = [
  {
    role: "ENGINEER",
    name: "Justin Beckham",
    image: "/images/team1.jpg", // replace with actual image path
  },
  {
    role: "MANAGER",
    name: "Smith Johnson",
    image: "/images/team2.jpg",
  },
  {
    role: "ENGINEER",
    name: "Jennifer Winds",
    image: "/images/team3.jpg",
  },
  {
    role: "MANAGER",
    name: "Edward Willey",
    image: "/images/team4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span> OUR TEAM
          MEMBER
        </p>
        <h2 className="text-3xl font-bold mt-2">
          Group of Certified & Experienced
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="text-center">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                width={300}
                height={350}
                className="object-cover w-full h-auto rounded-xl bg-green-200"
              />
            </div>
            <p
              className={`mt-4 text-sm font-semibold ${
                member.role === "ENGINEER" ? "text-green-500" : "text-green-500"
              }`}
            >
              {member.role}
            </p>
            <h3 className="text-lg font-bold">{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
