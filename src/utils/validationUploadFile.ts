const checkSize = (files: File[], maxSize: number | undefined) => {
  if (!maxSize) return true;
  let allow = true;
  let stop = false;
  files.forEach((file: File) => {
    if (stop) return;
    if (file.size > maxSize * 1024 * 1024) {
      allow = false;
      stop = true;
    }
  });
  return allow;
};

const checkMutiple = (files: File[], mutiple: boolean, maxLength: number) => {
  if (!mutiple) return true;
  return files.length <= maxLength;
};

export default function validationUploadFile(
  files: File[],
  maxSize: number | undefined,
  mutiple: boolean,
  maxLength: number
) {
  return checkMutiple(files, mutiple, maxLength) && checkSize(files, maxSize);
}
