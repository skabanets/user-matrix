import { MdOutlineCancel } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { type Filters, selectFilters, updateFilters } from "../../redux/users/usersSlice";

interface SearchFieldProps {
  field: keyof Filters;
}

export const SearchField = ({ field }: SearchFieldProps) => {
  const dispatch = useAppDispatch();
  const fieldValue = useAppSelector(selectFilters)[field];

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(updateFilters({ field, value }));
  };

  const handleDeleteFilter = () => {
    dispatch(updateFilters({ field, value: "" }));
  };

  return (
    <label className="relative">
      <input
        type="text"
        value={fieldValue}
        className="mt-2 w-full rounded-md p-2 font-roboto-regular text-base text-gray-600 focus:outline-none"
        onChange={handleChangeInput}
        placeholder={`Search by ${field}`}
        maxLength={25}
      />
      <MdOutlineCancel
        onClick={handleDeleteFilter}
        className="absolute right-3 top-1/2 size-6 -translate-y-1/2 cursor-pointer fill-greyColor hover:fill-red-500"
      />
    </label>
  );
};
