import AccordianComponent from "../AccordianComponent";

const DistrictTab = () => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.has("bed_room"));
  const keepOpenKeys = ["item-1"];
  return (
    <div className="pl-[8px]">
      <AccordianComponent
        title={"City and Southwest"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Orchard, Holland"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"NBalestier, Geylang "}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"Serangoon, Thomson"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
      <AccordianComponent
        title={"West"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
          <AccordianComponent
        title={"North"}
        body={<div>d</div>}
        keepOpen={urlParams.has("bed_room") ? keepOpenKeys : undefined}
      />
    </div>
  );
};

export default DistrictTab;
