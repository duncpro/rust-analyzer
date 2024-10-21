(function() {
    var type_impls = Object.fromEntries([["syntax",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Language,\n    &lt;L as Language&gt;::Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; SyntaxNodePtr&lt;L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","syntax::ptr::SyntaxNodePtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Language,\n    &lt;L as Language&gt;::Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","syntax::ptr::SyntaxNodePtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CAstPtr%3CN%3E%3E-for-SyntaxNodePtr%3C%3CN+as+AstNode%3E::Language%3E\" class=\"impl\"><a href=\"#impl-From%3CAstPtr%3CN%3E%3E-for-SyntaxNodePtr%3C%3CN+as+AstNode%3E::Language%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;AstPtr&lt;N&gt;&gt; for SyntaxNodePtr&lt;&lt;N as AstNode&gt;::Language&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(ptr: AstPtr&lt;N&gt;) -&gt; SyntaxNodePtr&lt;&lt;N as AstNode&gt;::Language&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<AstPtr<N>>","syntax::ptr::SyntaxNodePtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-Hash-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Language,\n    &lt;L as Language&gt;::Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","syntax::ptr::SyntaxNodePtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Language,\n    &lt;L as Language&gt;::Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;SyntaxNodePtr&lt;L&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","syntax::ptr::SyntaxNodePtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(node: &amp;SyntaxNode&lt;L&gt;) -&gt; SyntaxNodePtr&lt;L&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a [<code>SyntaxNodePtr</code>] for the node.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_node\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_node</a>(&amp;self, root: &amp;SyntaxNode&lt;L&gt;) -&gt; SyntaxNode&lt;L&gt;</h4></section></summary><div class=\"docblock\"><p>Like [<code>Self::try_to_node</code>] but panics instead of returning <code>None</code> on\nfailure.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_to_node\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_to_node</a>(&amp;self, root: &amp;SyntaxNode&lt;L&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxNode&lt;L&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>“Dereferences” the pointer to get the [<code>SyntaxNode</code>] it points to.</p>\n<p>Returns <code>None</code> if the node is not found, so make sure that the <code>root</code>\nsyntax tree is equivalent to (i.e. is build from the same text from) the\ntree which was originally used to get this [<code>SyntaxNodePtr</code>].</p>\n<p>Also returns <code>None</code> if <code>root</code> is not actually a root (i.e. it has a\nparent).</p>\n<p>The complexity is linear in the depth of the tree and logarithmic in\ntree width. As most trees are shallow, thinking about this as\n<code>O(log(N))</code> in the size of the tree is not too wrong!</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">cast</a>&lt;N&gt;(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AstPtr&lt;N&gt;&gt;<div class=\"where\">where\n    N: AstNode&lt;Language = L&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Casts this to an [<code>AstPtr</code>] to the given node type if possible.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">kind</a>(&amp;self) -&gt; &lt;L as Language&gt;::Kind</h4></section></summary><div class=\"docblock\"><p>Returns the kind of the syntax node this points to.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.text_range\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">text_range</a>(&amp;self) -&gt; <a class=\"struct\" href=\"syntax/struct.TextRange.html\" title=\"struct syntax::TextRange\">TextRange</a></h4></section></summary><div class=\"docblock\"><p>Returns the range of the syntax node this points to.</p>\n</div></details></div></details>",0,"syntax::ptr::SyntaxNodePtr"],["<section id=\"impl-Copy-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-Copy-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + Language,\n    &lt;L as Language&gt;::Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","syntax::ptr::SyntaxNodePtr"],["<section id=\"impl-Eq-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-Eq-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Language,\n    &lt;L as Language&gt;::Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","syntax::ptr::SyntaxNodePtr"],["<section id=\"impl-StructuralPartialEq-for-SyntaxNodePtr%3CL%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SyntaxNodePtr%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for SyntaxNodePtr&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section>","StructuralPartialEq","syntax::ptr::SyntaxNodePtr"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16347]}