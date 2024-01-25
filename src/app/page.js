import Image from "next/image";
import { Button, Uploader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function Home() {
  return (
    <div class="justify-center align-middle border-violet-700">
      <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
        <div class="flex align-middle justify-center">
          <span>Click or Drag files to this area to upload</span>
        </div>
      </Uploader>
    </div>
  );
}
