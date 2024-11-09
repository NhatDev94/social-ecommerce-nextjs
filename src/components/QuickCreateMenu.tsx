"use client";
import useCreatePost from "@/hooks/useCreatePost";
import Button from "./commons/Button";
import Modal from "./commons/modals/Modal";
import Upload from "./commons/Upload";
import Image from "./commons/Image";

export default function QuickCreateMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { desRef, media, handleUpload, handleCreatePost } = useCreatePost();

  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-white rounded-lg overflow-hidden w-4/5 min-w-[320px] max-w-[400px]">
        <div className="px-4 pt-4">
          <h4 className="w-full text-xl font-semibold text-black mb-4">
            Create Post
          </h4>
          <textarea
            ref={desRef}
            placeholder="How are you today?"
            className="outline-none w-full"
            rows={4}
            autoFocus
          />

          {media.length > 0 && (
            <div className="mt-4 w-full h-32 border border-black/20 rounded-lg overflow-hidden">
              <Image src={media[0].base64} alt="media" />
            </div>
          )}
        </div>

        <div className="w-full flex items-center justify-between gap-x-4 mt-4 px-4 py-2 border-t border-black/10">
          <Upload onChange={handleUpload}>Image</Upload>
          <Button onClick={handleCreatePost}>Create</Button>
        </div>
      </div>
    </Modal>
  );
}
