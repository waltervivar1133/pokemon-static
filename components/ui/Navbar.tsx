import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
