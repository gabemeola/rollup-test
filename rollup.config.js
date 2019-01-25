const star = {
  input: './index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  }
}

const def = {
  input: './indexDef.js',
  output: {
    file: 'lib/indexDef.js',
    format: 'cjs',
  }
}

export default [star, def];