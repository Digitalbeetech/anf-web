import { Suspense } from "react";
import UploadAndPreviewFlipBook from "../Components/PreviewBook";

export default function PreviewBook() {
  return (
    <Suspense>
      <UploadAndPreviewFlipBook />;
    </Suspense>
  );
}
