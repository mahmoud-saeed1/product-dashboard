import Button from "./Button";

interface IButtons {
  onEditHandler: () => void;
  onDeleteHandler: () => void;
}

const ProductButtons = ({ onEditHandler, onDeleteHandler }: IButtons) => {
  return (
    <div className="flex items-center space-x-2">
      <Button className="bg-green-600" title="edit" onClick={onEditHandler} />
      <Button className="bg-red-600" title="delete" onClick={onDeleteHandler} />
    </div>
  );
};

export default ProductButtons;
