import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Contacto</h1>
      <p className="text-base text-gray-700 dark:text-gray-300">
        ¿Quieres conversar? Simplemente envíame un DM con una pregunta directa
        en{" "}
        <Link
          href="https://x.com/_edu_svpe"
          className="text-blue-500"
          target="_blank"
        >
          Twitter
        </Link>{" "}
        o escríbeme directamente al correo {" "}
        <Link
          href="mailto:eduardosvpe@gmail.com"
          className="text-blue-500"
          target="_blank"
        >
          eduardosvpe@outlook.com
        </Link>
      </p>
    </div>
  );
};

export default ContactMe;
