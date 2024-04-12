interface DetailedDescriptionProps {
  details: string;
}

const DetailedDescription: React.FC<DetailedDescriptionProps> = ({
  details = "-",
}) => {
  return (
    <div className="text-black-body text-[15px] font-[400] leading-[26px]">
      {details}
    </div>
  );
};

export default DetailedDescription;
