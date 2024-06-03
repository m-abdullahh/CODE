const results = [
  {
    title: "THE BERLIN AGREEMENT",
    sect_no: 101,
    desc: "Tech Innovators Inc. accused Tech Innovations Ltd. of patent infringement on a new microchip design.",
    hearings:
      "The court heard arguments from both sides, with Tech Innovators Inc. presenting evidence of the patent violation and Tech Innovations Ltd. arguing the patent's invalidity.",
  },
  {
    title: "THE TOKYO TREATY",
    sect_no: 102,
    desc: "Gourmet Delights Co. alleged that Delights Gourmet infringed on its trademark 'Savory Delights'.",
    hearings:
      "In the hearings, Gourmet Delights Co. sought a cease and desist order while Delights Gourmet defended its use of the trademark as fair use.",
  },
  {
    title: "THE LONDON ACCORD",
    sect_no: 103,
    desc: "Fashion Forward LLC claimed that Forward Fashion copied its unique clothing designs.",
    hearings: "The hearings involved expert testimony on design similarities and Fashion Forward LLC's request for an interim injunction.",
  },
  {
    title: "THE NEW YORK AGREEMENT",
    sect_no: 104,
    desc: "Health Matters Corp. filed for an injunction against Healthy Matters Inc. for service mark violation.",
    hearings:
      "During the hearings, Health Matters Corp. presented evidence of brand confusion, and Healthy Matters Inc. argued for the distinctiveness of its mark.",
  },
  {
    title: "THE ROME CONVENTION",
    sect_no: 105,
    desc: "Smart Solutions Ltd. pursued legal action against Smart Solution Technologies for software patent infringement.",
    hearings:
      "The court sessions focused on the technical aspects of the software patents and Smart Solutions Ltd.'s claim for compensatory damages.",
  },
  {
    title: "THE GENEVA PACT",
    sect_no: 106,
    desc: "Eco Friendly Products sought action against Eco Products Ltd. for trademark similarity.",
    hearings: "Hearings included discussions on market impact and Eco Friendly Products' request for a restraining order.",
  },
  {
    title: "THE MADRID AGREEMENT",
    sect_no: 107,
    desc: "Digital Ventures Inc. accused Venture Digital of copying its proprietary software algorithm.",
    hearings: "The hearings involved technical expert witnesses and Digital Ventures Inc.'s demand for a court order to stop the infringement.",
  },
  {
    title: "THE MOSCOW TREATY",
    sect_no: 108,
    desc: "Innovative Designs Ltd. filed a suit against Design Innovators for design patent infringement.",
    hearings: "Court sessions focused on the validity of the design patents and Innovative Designs Ltd.'s request for compensation.",
  },
  {
    title: "THE SYDNEY AGREEMENT",
    sect_no: 109,
    desc: "Secure Tech Inc. demanded action against Tech Secure Solutions for cybersecurity software patent violation.",
    hearings: "Hearings featured cybersecurity experts and Secure Tech Inc.'s plea for immediate cessation of the infringement and damages.",
  },
  {
    title: "THE BEIJING CONVENTION",
    sect_no: 110,
    desc: "Green Energy Corp. sought legal remedy against Energy Green Ltd. for trademark infringement of 'Green Energy'.",
    hearings: "The court examined trademark registration details and Green Energy Corp.'s request for an injunction and financial compensation.",
  },
];
const oneRes = [
  {
    title: "THE BERLIN AGREEMENT",
    sect_no: 101,
    desc: "Tech Innovators Inc. accused Tech Innovations Ltd. of patent infringement on a new microchip design.",
    hearings:
      "The court heard arguments from both sides, with Tech Innovators Inc. presenting evidence of the patent violation and Tech Innovations Ltd. arguing the patent's invalidity.",
  },
];

//COPYRIGHT GENERIC
const genericSearch = (req, res) => {
  reqData = req.query;
  console.log("GENERAL: ", reqData.text);
  res.json(results);
};

//COPYRIGHT SEARCH FUNC
const copyrightSearh = (req, res) => {
  reqData = req.query;

  if (reqData.text) {
    console.log(reqData.text);
    res.json(results);
  } else if (reqData.chapter && reqData.section) {
    console.log("Chaper:", reqData.chapter, " Section: ", reqData.section);

    res.json(oneRes);
  }
};

//TRADEMARK SEARCH FUNC
const trademarkSearch = (req, res) => {
  reqData = req.query;

  switch (req.query.caseType) {
    case "general":
      console.log("GENERAL: ", reqData.text);

      break;

    case "copyright":
      if (reqData.text) {
        console.log(reqData.text);
      } else if (reqData.chapter && reqData.section) {
        console.log("Chaper:", reqData.chapter, " Section: ", reqData.section);
      }
      break;

    case "trademark":
      if (reqData.text) {
        console.log(reqData.text);
      } else if (reqData.chapter && reqData.section) {
        console.log("Chaper:", reqData.chapter, " Section: ", reqData.section);
      }
      break;

    default:
      break;
  }

  res.json(results);
};

module.exports = { genericSearch, copyrightSearh, trademarkSearch };
