const listA = ["Investors", "Features", "Book a demo", "Security"];
const listB = ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"];
// const listC = ["Free rewards", "Documentation", "Affiliate program"];
const language1 = ["English", "Bangla", "Portuguese"];
const location = ["Singapore", "America", "Bangladesh"];

const linkList = (title, list, isDropdown = false) => (
  <div className=" min-w-fit mt-[30px]">
    <h5 className="font-bold">{title}</h5>
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
    <footer className=" px-[317px] mt-[26px]">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-y-5 gap-x-2.5 lg:gap-8 py-12 w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
        {linkList("About", listA)}
        {linkList("MyFeedback", listB)}
        <div className="flex flex-col">
          {linkList("Languages", language1, true)}
          {linkList("Countries", location, true)}
        </div>
      </div>
      <p className="text-center mb-[27px]">Copyright @ December 2024 myfeedback, designed by mokchhedulislam</p>
    </footer>
  );
};

export default Footer;
