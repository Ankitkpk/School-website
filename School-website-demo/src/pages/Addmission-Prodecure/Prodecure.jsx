import React from "react";

const Prodecure = () => {
  return (
    <div>
      <div className="Addmision-section">
        <div className="Addmission-bg">
          <h1>Addmissons Procedure</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &gt;{" "}
            <Link to="/addmissions">Addmissions</Link> &gt;{" "}
            <Link>Addmissions Procedure</Link> {breadcrumb}
          </nav>
        </div>
      </div>

      <section className="container mx-auto px-6 py-12">
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 uppercase">
            Registration and Admission Procedure and Criterion
          </h2>
          <div className="w-20 h-1 bg-gray-800 mb-8"></div>

          <ul className="list-none space-y-4 text-gray-700">
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              <span>
                Procure prospectus/admission form from the school office on any
                working day between 9:30 am and 1:00 pm OR use the Online
                Admission form available on our official website. <br />{" "}
                <b> littlescholar-kashipur.com</b>
              </span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              Submit the duly filled form at the school office OR on the online
              admission link and obtain/generate receipt.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              For classNamees Nursery – IX, birth certificate, school's report card
              and TC are mandatory.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              Date and time of Subjective Aptitude Assessment (SAA) shall be
              intimated either telephonically or at the registered email of the
              candidate.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              No SAA for classNamees Pre Nursery, Nursery, KG and I.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              Admission to classNamees 10 and 12 are given only in transfer cases
              with TC from the previous school as well as all dues clearance
              slip from the concerned authority.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              For new admission except className Nursery admission is on the basis
              of admission test in the Maths, English, Hindi & Science.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-circle-check pr-3 pt-1"></i>
              For old students, a minimum of 33% marks in grand total (excluding
              practical marks), which include half yearly, UTs/PTs, and Annual
              Exams are mandatory for admission.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Prodecure;