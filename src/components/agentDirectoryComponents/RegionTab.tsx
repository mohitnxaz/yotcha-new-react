import AccordianComponent from "../AccordianComponent";

const RegionTab = () => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.has("bed_room"));
  const keepOpenKeys = ["item-1"];
  return (
    <div className="pl-[8px]">
      <AccordianComponent
        title={"Central Region"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Eastern Region"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"North East Region"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Northern Region"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"West Region"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
    </div>
  );
};

export default RegionTab;
