interface Province {
  code: string;
  name: string;
  fullName: string;
  slug: string;
  type: "province" | "city";
  isCentral: boolean;
}

interface Ward {
  code: string;
  name: string;
  fullName: string;
  slug: string;
  type: "ward" | "commune";
  provinceCode: string;
}
