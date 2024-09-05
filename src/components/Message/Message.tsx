interface MessageProps {
  text: string;
}

export const Message = ({ text }: MessageProps) => {
  return (
    <div className="font-montserrat-semibold flex h-[60vh] w-full items-center justify-center border border-white bg-tableRowOddColor text-2xl text-tableHeaderBgColor shadow-sm">
      {text}
    </div>
  );
};
