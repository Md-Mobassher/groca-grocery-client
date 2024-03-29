import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoryDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-all duration-300 bg-green-400 hover:bg-green-500 rounded-3xl text-white px-10 py-2">
        All Categories
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Fruits & Vegetables</DropdownMenuItem>
        <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
        <DropdownMenuItem>Biscuits, Snacks & Chocolates</DropdownMenuItem>
        <DropdownMenuItem>Meats, Frozen & Seafood</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;
