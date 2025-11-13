import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";

type Props = {
  name: string;
  slug: string;
  icon: IconType;
  description: string;
};

export default function AgencyCard({
  name,
  slug,
  icon: Icon,
  description,
}: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/user/message/${slug}`)}
      className="group bg-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center hover:scale-[1.03]"
    >
      <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-4 group-hover:bg-blue-700 group-hover:text-white transition">
        <Icon className="text-4xl" />
      </div>
      <h3 className="text-lg font-bold text-[#0a1f44] mb-1 uppercase tracking-wide group-hover:text-blue-700 transition">
        {name}
      </h3>
      <p className="text-sm text-gray-600 font-medium mb-4 leading-relaxed">
        {description}
      </p>
      <button className="px-5 py-2 bg-[#0a1f44] text-white rounded-full hover:bg-blue-800 transition font-semibold text-sm shadow-md">
        Report to {name}
      </button>
    </div>
  );
}
