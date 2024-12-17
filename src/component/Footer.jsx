const listA = ["About MyFeedback", "Investor Relations"];
const listB = ["MyFeedback for business","Collections","Talk", "Events", "MyFeedback blog", "Support", "Developers"];

const language1 = ["English", "Bangla", "Portuguese"];
const location = ["Singapore", "America", "Bangladesh"];

const linkList = (title, list, isDropdown = false) => (
  <div className=" min-w-fit mt-[30px] ">
    <h5 className="font-bold pb-[11px]">{title}</h5>
    {isDropdown ? (
      <select className="bg-transparent ">
        {list.map((item, i) => (
          <option key={i} value={item} className="">
            {item}
          </option>
        ))}
      </select>
    ) : (
      <ul className="space-y-2">
        {list.map((item, i) => (
          <li className="text-[#5e5e5e] text-sm" key={i}>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Footer = () => {
  return (
    <footer className=" md:px-[317px] md:mt-[26px] px-[20px] " >
      <div className="grid grid-cols-3 gap-[20px]  lg:gap-[250px] md:py-12 w-full md:gap-[250px] ">
        {linkList("About", listA)}
        {linkList("MyFeedback", listB)}
        <div className="flex flex-col">
          {linkList("Languages", language1, true)}
          {linkList("Countries", location, true)}
        </div>
      </div>
      <p className="text-center mt-[20px]  mb-[27px]">Copyright @ December 2024 myfeedback, designed by mokchhedulislam</p>
    </footer>
  );
};

export default Footer;
