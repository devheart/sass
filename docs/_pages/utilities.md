---
layout: page
title: Utilities
permalink: /utilities/
custom_menu_order: 2
custom_description: Various handy utilities.
---

<h2>Display</h2>
<p>Display/hide elements by breakpoint.</p>


<h3>Hidden</h3>
<p class="lead">
    <code>.dh-hidden-[xs/sm/md/lg/xl]</code>
</p>

<table class="table table-bordered mb-2">
    <thead>
        <tr>
            <th>Class</th>
            <th>xs</th>
            <th>sm</th>
            <th>md</th>
            <th>lg</th>
            <th>xl</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.dh-hidden-xs</code></td>
            <td class="table-danger"><strong>hidden</strong></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
        </tr>
        <tr>
            <td><code>.dh-hidden-sm</code></td>
            <td><span class="text-muted">visible</span></td>
            <td class="table-danger"><strong>hidden</strong></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
        </tr>
        <tr>
            <td><code>.dh-hidden-md</code></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td class="table-danger"><strong>hidden</strong></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
        </tr>
        <tr>
            <td><code>.dh-hidden-lg</code></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td class="table-danger"><strong>hidden</strong></td>
            <td><span class="text-muted">visible</span></td>
        </tr>
        <tr>
            <td><code>.dh-hidden-xl</code></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td><span class="text-muted">visible</span></td>
            <td class="table-danger"><strong>hidden</strong></td>
        </tr>
    </tbody>
</table>

<h3>Visible</h3>
<p class="lead">
    <code>.dh-visible-[xs/sm/md/lg/xl]-[block/flex/inline]</code>
</p>

<table class="table table-bordered mb-2">
    <thead>
        <tr>
            <th>Class</th>
            <th>xs</th>
            <th>sm</th>
            <th>md</th>
            <th>lg</th>
            <th>xl</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.dh-visible-xs-*</code></td>
            <td class="table-success"><strong >visible</strong></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
        </tr>
        <tr>
            <td><code>.dh-visible-sm-*</code></td>
            <td><span class="text-muted">hidden</span></td>
            <td class="table-success"><strong >visible</strong></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
        </tr>
        <tr>
            <td><code>.dh-visible-md-*</code></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td class="table-success"><strong >visible</strong></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
        </tr>
        <tr>
            <td><code>.dh-visible-lg-*</code></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td class="table-success"><strong >visible</strong></td>
            <td><span class="text-muted">hidden</span></td>
        </tr>
        <tr>
            <td><code>.dh-visible-xl-*</code></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td><span class="text-muted">hidden</span></td>
            <td class="table-success"><strong >visible</strong></td>
        </tr>
    </tbody>
</table>

<h3>Comparison</h3>
<p class="lead">Resize your browser to reflect changes.</p>
<table class="table table-bordered">
    <thead>
        <tr>
            <th></th>
            <td><code>xl</code></td>
            <td><code>lg</code></td>
            <td><code>md</code></td>
            <td><code>sm</code></td>
            <td><code>xs</code></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <code>.dh-visible-*</code>
            </td>
            <td>
                <span class="dh-visible-xl-inline text-success">visible</span>
                <span class="dh-hidden-xl text-danger">visible</span>
            </td>
            <td>
                <span class="dh-visible-lg-inline text-success">visible</span>
                <span class="dh-hidden-lg text-danger">hidden</span>
            </td>
            <td>
                <span class="dh-visible-md-inline text-success">visible</span>
                <span class="dh-hidden-md text-danger">hidden</span>
            </td>
            <td>
                <span class="dh-visible-sm-inline text-success">visible</span>
                <span class="dh-hidden-sm text-danger">hidden</span>
            </td>
            <td>
                <span class="dh-visible-xs-inline text-success">visible</span>
                <span class="dh-hidden-xs text-danger">hidden</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>.dh-hidden-*</code>
            </td>
            <td>
                <span class="dh-visible-xl-inline text-danger">hidden</span>
                <span class="dh-hidden-xl text-success">visible</span>
            </td>
            <td>
                <span class="dh-visible-lg-inline text-danger">hidden</span>
                <span class="dh-hidden-lg text-success">visible</span>
            </td>
            <td>
                <span class="dh-visible-md-inline text-danger">hidden</span>
                <span class="dh-hidden-md text-success">visible</span>
            </td>
            <td>
                <span class="dh-visible-sm-inline text-danger">hidden</span>
                <span class="dh-hidden-sm text-success">visible</span>
            </td>
            <td>
                <span class="dh-visible-xs-inline text-danger">hidden</span>
                <span class="dh-hidden-xs text-success">visible</span>
            </td>
        </tr>
    </tbody>
</table>
