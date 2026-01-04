export default function MnemonicImage({ image = null }) {
    if (!image) return null;

    return (
        <div>
            <img className="MnemonicImage" src={image} />
        </div>
    );
}