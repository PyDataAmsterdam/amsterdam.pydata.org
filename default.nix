with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "global.pydata.org";
  buildInputs = [
    jekyll
    ruby_2_7
    zlib
  ];
  src = null;
}
