import React from "react";
import DiagonalSeparator from "./DiagonalSeparator";
import JobCard from "./JobCard";

export default function TeamSection() {
  return (
    <DiagonalSeparator color="white" id="team">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here Are Our Legends</h2>
            <p className="m-4 text-gray-600 leading-relaxed text-lg">
              Dolore voluptate ullamco et occaecat dolor elit sunt sint cillum
              est irure nisi labore. Lorem enim nulla ad elit. Et sunt proident
              ex nulla non consequat aliqua non qui esse cillum tempor. Nisi
              Lorem esse in qui occaecat amet irure est.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <JobCard
            name="Steve Jobs"
            job="Former CEO"
            img="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
          />
          <JobCard
            name="Steve Wozniak"
            job="Co-Founder"
            img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg"
          />
          <JobCard
            name="Tim Cook"
            job="Current CEO"
            img="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/tc_top.png"
          />
          <JobCard
            name="Katherine Adams"
            job="Senior Vice President"
            img="https://images.yourstory.com/cs/images/people/AdamsKatherine-1587032528005.jpg"
          />
        </div>
      </div>
    </DiagonalSeparator>
  );
}
