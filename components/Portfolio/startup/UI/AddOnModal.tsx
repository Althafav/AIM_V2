import React from 'react';


interface AddOnModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    onSkip: () => void;
    addons: { name: string; price: number }[];
    selectedAddons: { name: string; price: number }[];
    onAddonToggle: (addon: { name: string; price: number }) => void;
    totalPrice: number;

}

const AddOnModal: React.FC<AddOnModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    onSkip,
    addons,
    selectedAddons,
    onAddonToggle,
    totalPrice,

}) => {
    if (!isOpen) return null;

    return (
        <div className="custom-modal-overlay">
            <div className="custom-modal">
                <div className="custom-modal-header">
                    <h5 className='text-black'>Do you want any Add-ons ?</h5>
                    <button className="custom-modal-close" onClick={onClose}>×</button>
                </div>
                <div className="custom-modal-body">
                    {addons.map((addon) => (
                        <div key={addon.name} className="custom-modal-addon">
                            <input
                                type="checkbox"
                                checked={selectedAddons.some(item => item.name === addon.name)}
                                onChange={() => onAddonToggle(addon)}
                            />
                            <label>{addon.name} - ${addon.price}</label>
                        </div>
                    ))}
                </div>
                <div className="custom-modal-footer">
                    <div>Total: <strong>${totalPrice}</strong></div>
                    <div className="mt-3">
                        <button className="custom-modal-confirm" onClick={onConfirm}>Confirm Add-ons</button>
                        <button className="custom-modal-skip" onClick={onSkip}>Skip Add-ons</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOnModal;
